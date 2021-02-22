import React, {useState} from "react";

const SerchBar = ({onSubmit}) => {
    const [term, setTerm] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Image Serch</label>
                    <input type="text" name="serch" placeholder="" value={term} onChange={(event) => {setTerm(event.target.value)}}/> 
                    {/* event.target.valueが検索バーに表示された文字列 */}
                </div>
            </form>
        </div>
    );
};

export default SerchBar;