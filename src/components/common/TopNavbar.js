import { Button } from "./Button"

export const TopNavbar = () => {

    const handleButtonClick = (event) => {
        console.log(" handleButtonClick : ", event.target.name)
    }

    return (
        <div className="py-5 flex justify-between ">
            <button className="text-base text-lg hover:text-primary">itsWaleed.com</button>
            <div className="flex self-end">
                <Button name={"browsemy"} onClick={handleButtonClick}>
                    Browse my
                </Button>
                <Button name={"aboutme"} onClick={handleButtonClick}>
                    About me
                </Button>
                <Button name={"contactme"} onClick={handleButtonClick} active={true}>
                    Contact me
                </Button>
            </div>
        </div>
    )
}