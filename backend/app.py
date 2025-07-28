from supabase import create_client, Client
import os



# Renseigne tes propres clés ici ou utilise des variables d'environnement
SUPABASE_URL = os.getenv("SUPABASE_URL", "https://pxyqknxfvimxdcmplbff.supabase.co")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk")

# Connexion à Supabase
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Exemple : récupérer toutes les lignes de la table 'airbnb'
def fetch_messages():
    response = supabase.table("chatGO-translator").select("*").execute()
    if response.data:
        for row in response.data:
            print(f"[{row['name']}] {row['msg']}")
    else:
        print("Aucune donnée trouvée.")

if __name__ == "__main__":
    fetch_messages()