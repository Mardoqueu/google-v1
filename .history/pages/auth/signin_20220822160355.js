import React from "react";
import Header from '../../components/Header';
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
    return (
    <>
        <Header/>
        <div className="">
        {Object.values(providers).map(providers => (
            <div key={provider.name} className="">
                <img
            className="w-52 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
            />
            </div>
        ))}
        </div>

    </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    };
}