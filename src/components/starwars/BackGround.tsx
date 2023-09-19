import Image from "next/image"

export default function BackGround() {
    return (
        <Image
            src="https://wallpaperset.com/w/full/a/8/a/177638.jpg"
            fill
            alt="Star Wars"
            className="object-cover -z-50 opacity-30"
        />
    )

}