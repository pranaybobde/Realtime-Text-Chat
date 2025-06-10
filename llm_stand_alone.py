from dataclasses import dataclass
import json
import os
import aiohttp
from livekit import agents
from livekit.agents import ChatContext, ChatMessage, AgentSession, Agent, RoomInputOptions, RoomOutputOptions, function_tool, RunContext, FunctionTool, StopResponse
from livekit.plugins import (openai)


LLM_URL = os.environ.get("llm_url")
API_KEY = os.environ.get("api_key")
MODEL_NAME = os.environ.get("model_name")
CHROMA_SERVICE_URL = os.environ.get("chroma_url")

class Assistant(Agent):
    def __init__(self) -> None:
        super().__init__(instructions="You are a helpful voice AI assistant named Leo")


    async def on_user_turn_completed(
        self, turn_ctx: ChatContext, new_message: ChatMessage,
    ) -> None:
        if not new_message.text_content:
            print("No input received !!!!!")
            raise StopResponse
        url = CHROMA_SERVICE_URL
        payload = {
        "message":new_message.text_content()
        }

        async with aiohttp.ClientSession() as session:
            async with session.post(url, json=payload) as response:
                print("Status:", response.status)
                text = await response.json()
                print(text["data"][0][0]["metadata"])
                
                user_data = text["data"][0][0]["metadata"]
                
                
        turn_ctx.add_message(
            role="assistant", 
            content=f"Additional information relevant to the user's next message: {user_data}"
        )
        await self.update_chat_ctx(turn_ctx)



async def entrypoint(ctx: agents.JobContext):
    
    await ctx.connect()
    
    session = AgentSession(
        llm=openai.LLM(base_url=LLM_URL,api_key=API_KEY,model=MODEL_NAME)
        )
    

    await session.start(
        room=ctx.room,
        agent=Assistant(),
        room_input_options=RoomInputOptions(text_enabled=True, audio_enabled=False),
        room_output_options=RoomOutputOptions(transcription_enabled=True, audio_enabled=False),
    )

    await session.generate_reply(
        instructions="Introduce yourself in short as you are a helpful voice AI assistant named Leo"
    )
    


if __name__ == "__main__":
    agents.cli.run_app(agents.WorkerOptions(entrypoint_fnc=entrypoint))