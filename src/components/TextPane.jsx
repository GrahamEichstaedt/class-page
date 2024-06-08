import './TextPane.css';

/**
 * TextPane components should be a few paragraphs of text
 * with an image somewhere off to the side. Ideally, the side the
 * image appears on should alternate
 * 
 * @param {String[]} textArray
 */
export function TextPane({textArray}) {


    return (
        <section className="text-pane">
            <div className="text-wrapper">
                {textArray.map((text, index) => (
                    <p className={`text ${index % 2 === 0 ? 'left': 'right'}`} key={index} id={`text${index}`}>{text}</p>
                ))}
            </div>
            <img src="/public/react.svg" alt="Placeholder logo" width={"250px"} />
        </section>
    )
}

export default TextPane;