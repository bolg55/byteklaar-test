'use client';
import {StrapiVideo} from "@/components/custom/StrapiVideo";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

export function HomeIntro({data}) {
    const {LogoAnimation} = data;

    useGSAP(() => {
        gsap.to('.strapiAnimation', {
            delay: 3,
            y: -2000,
            opacity: 1,
            duration: 1.25
        })
    });
    return (
        <div className="strapiAnimation absolute z-50 bg-byte-blue overflow-hidden">
            <StrapiVideo
                className="h-[100vh] py-32 w-screen"
                controls={false}
                autoplay={true}
                muted={true}
                height={2560}
                src={LogoAnimation.url}
                width={2560}
            />
        </div>
    );
}