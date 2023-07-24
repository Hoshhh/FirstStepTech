/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import React, { useState } from "react";

const DevTab = () => {
    return (
        <div id="developer" className="w-full md:grid grid-cols-2 gap-4">
            <div>
                <h3 className="tracking-widest uppercase text-slate-800">Features</h3>
                <ul className="list-disc">
                    <li className="py-2">List your technical skills.</li>
                    <li className="py-2">List the job position you're interested in (Frontend Web dev, IOS dev, etc.)</li>
                    <li className="py-2">Link your socials and portfolio to showcase to employers what you've been working on.</li>
                    <li className="py-2">List if you're looking for part time or full time positions, and if you're looking to work remotely, on-site, or both.</li>
                </ul>
            </div>
            <div className="flex flex-col md:items-center md:justify-center md:text-center">
                <h3 className="tracking-widest uppercase text-slate-800 md:mt-0 mt-8">How it Works</h3>
                <p className="py-2">
                    Your profile will automatically be sent to recruiters if your skills match what they're looking for.
                </p>
                <p className="py-2">
                    This streamlines the job search, which allows you to focus on your skills 
                    as a developer! Keeping your profile updated will help your chances. 
                </p>
                <Image src="/assets/code2.png" width={400} height={400} alt="/" className="mt-4 rounded-xl shadow-xl shadow-gray-400"/>
            </div>
        </div>
    )
}

const RecruitTab = () => {
    return (
        <div id="developer" className="w-full md:grid grid-cols-2 gap-4">
            <div>
                <h3 className="tracking-widest uppercase text-slate-800">Features</h3>
                <ul className="list-disc">
                    <li className="py-2">Quickly get applicant's with relevant skills you're looking for.</li>
                    <li className="py-2">Tailor your job listing to meet your needs.</li>
                    <li className="py-2">Freely view any applicant's profile.</li>
                    <li className="py-2">If you find that an applicant has been recently hired, you can mark them as hired so you will see different candidates.</li>
                </ul>
            </div>
            <div className="flex flex-col md:items-center md:justify-center md:text-center">
                <h3 className="tracking-widest uppercase text-slate-800 md:mt-0 mt-8">How it Works</h3>
                <p className="py-1">
                    You will provide all relevant information for the job listing such as skills (top 3), location, etc.
                </p>
                <p className="py-1">
                    Based on the information in your job listing, you will automatically be sent information on 
                    qualified candidates so you can begin your search.
                </p>
                <Image src="/assets/code2.png" width={400} height={400} alt="/" className="mt-4 rounded-xl shadow-xl shadow-gray-400"/>
            </div>
        </div>
    )
}

const Info = () => {
    const [dev, setDev] = useState(true);

  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-4 md:py-8 mb-12">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Solutions for both Developers and Recruiters
        </p>
        <div className="grid grid-cols-2 gap-0 justify-center">
            <div className={dev ? "w-full border-2 border-r-0 border-b-0 border-slate-200" : "w-full border-2 border-r-0 border-slate-200"}>
                <button onClick={() => setDev(true)} className={dev ? "w-full border-t-4 border-sky-700" : "w-full"}>Developers</button>
            </div>
            <div className={dev ? "w-full border-2 border-slate-200" : "w-full border-2 border-b-0 border-slate-200"}>
                <button onClick={() => setDev(false)} className={dev ? "w-full" : "w-full border-t-4 border-sky-700"}>Recruiters</button>
            </div>
        </div>
        <div className="flex flex-col mt-16">
            {
                dev ? <DevTab /> : <RecruitTab />
            }
        </div>
      </div>
    </section>
  );
};

export default Info;