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