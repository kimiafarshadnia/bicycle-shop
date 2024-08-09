'use client'

type Props = {
    imageUrl: string;
    text?: string
}
export const ParallaxScrollingEffect = ({ imageUrl, text }: Props) => {

    return (
        <div className="bg-center bg-fixed bg-cover bg-no-repeat h-[200px] md:h-[300px] parallax flex items-center text-center justify-center "
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}>

            <h4 className="text-white text-2xl md:text-4xl font-bold rounded-xl bg-primary/50 p-5">{text}</h4>
        </div>
    );
};
