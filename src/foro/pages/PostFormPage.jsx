import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewPost, resetReducer } from "../../store/foro/foroSlice";

export const PostFormPage = () => {

    /* Quitarlo */

    //States

    const [title, setTitle] = useState("");

    const [textArea, setTextArea] = useState("");

    //Dispatch
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Fun

    const onTitleChange = ({target}) => {

        setTitle(target.value);

    };

    const onTextAreaChange = ({target}) => {

        setTextArea(target.value);

    }

    const onHandleSubmit = () => {

        event.preventDefault();

        if(title.length > 1 && textArea.length > 10) {

            dispatch(addNewPost({ title, textArea }));
            dispatch(resetReducer());
    
            navigate('/', { replace: true} );

        } else {

            throw new Error("Ocurrió un error en el armado del post.")

        }

    }

    return (
        
        <div 
            className="container mt-3" 
            style={{ 
                minHeight: "60vh", 
                position: "relative" 
            }}
        >
            <form>
                <div className="form-group">
                    <label htmlFor="formControlTitle">Título del post</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="formControlTitle"
                        onChange={ onTitleChange } 
                        value={ title }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formControlTextarea">Contenido del post</label>
                    <textarea 
                        className="form-control" 
                        id="formControlTextarea" 
                        rows="3"
                        onChange={ onTextAreaChange }
                        value={ textArea }
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={ onHandleSubmit }
                >   Submit  </button>
            </form>
        </div>
        
    )

}
