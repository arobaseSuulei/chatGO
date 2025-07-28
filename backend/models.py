from openai import OpenAI
import os
from dotenv import load_dotenv

# Charger les variables d'environnement du fichier .env
load_dotenv()

# Récupérer la clé
api_key = os.getenv("OPENROUTER_API_KEY")

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=api_key,
)
completion = client.chat.completions.create(
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    # "X-Title": "<YOUR_SITE_NAME>",  Optional. Site title for rankings on openrouter.ai.
  },
  extra_body={},
  model="google/gemini-2.5-flash-lite",
  messages=[
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Who is it on this image?"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh"
          }
        }
      ]
    }
  ]
)
print(completion.choices[0].message.content)