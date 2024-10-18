import LanguageCart from "./languageTemplate";
import MyButton from "./button";

function TemplateCart(props) {
    return (
        <div className="projectsCartWrapper flex items-center mt-10 mx-8 border-2 border-putihAbu shadow-lg rounded-md p-12">
            <div className="w-1/3 flex justify-center">
                <img 
                    src={props.picture} 
                    alt="Project Image" 
                    className={`${props.size} bg-transparent object-cover`}
                />
            </div>
            <div className="textWrapper flex flex-col space-y-8 w-2/3">
                <p className="text-1xl">{props.description}</p>
                <div className="button-language-wrapper mt-10 flex space-x-8 items-center">
                <MyButton label="View Projects" href={props.href}/>
                    {props.languages.map((language, index) => (
                        <LanguageCart key={index} Language={language} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TemplateCart;
