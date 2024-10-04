import React from "react";



export default function BackSection (){


    return(
        <section className="min-h-max fixed top-10 inset-x-0 ">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start pt-40">
            <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40">
            </div>
            <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40">
            </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl">
        </div>
    </section>
    )
}