import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Home from "../Home";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function AuthTest() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [islogged, setIslogged] = useState(false);

    async function handleLogin() {
        try {
            const { data, error } = await supabase
                .from("user") // Assure-toi que le nom de la table est correct
                .select("*")
                .eq("id_user", id)
                .eq("name", name);

            if (error) {
                console.log("Erreur lors de la connexion :", error);
                return;
            }

            if (data && data.length > 0) {
                // Utilisateur trouvé, connexion réussie
                setIslogged(true);
            } else {
                alert("ID ou nom incorrect");
            }
        } catch (error) {
            console.log("Erreur de connexion :", error);
        }
    }

    return (
        <div className="p-24 flex flex-col gap-14">
            {islogged ? (
                <Home /> // Affiche le composant Home si l'utilisateur est connecté
            ) : (
                <>
                    <input
                        className="p-2 text-black"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="p-2 text-black"
                        type="text"
                        placeholder="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <button className="p-2 bg-blue-500 text-white rounded" onClick={handleLogin}>
                        Connexion
                    </button>
                </>
            )}
        </div>
    );
}
