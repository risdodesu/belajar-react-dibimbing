const Hero = ({imgSrc="default image", text}) => {
    return (
        <>
            <img width="300" src={imgSrc} />
            <p>{text}</p>
        </>
    )
}

export default Hero;