import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import InputPrice from "./InputPrice";
import InputName from "./InputName";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function Popup() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Open Popup
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center z-10">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                            <h2 className="text-lg font-semibold">Add operation of revenu</h2>

                            <nav className="mt-2 flex flex-col text-gray-600">
                                <InputName/>
                                <InputPrice/>
                            </nav>

                            <div className="mt-4">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
