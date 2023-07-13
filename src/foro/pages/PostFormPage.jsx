import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks";
import { onHandleSubmit } from "../helpers";


export const PostFormPage = () => {

    const{ title, textArea, onInputChange } = useForm({
        title:'',
        textArea: ''
    });
    
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    return (
        
        <div 
            className="container mt-3" 
        >
            <form>
                <div className="form-group">
                    <label htmlFor="formControlTitle"> Título del post </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="formControlTitle"
                        name="title"
                        onChange={ onInputChange } 
                        value={ title }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formControlTextarea"> Contenido del post </label>
                    <textarea 
                        className="form-control" 
                        id="formControlTextarea" 
                        rows="3"
                        name="textArea"
                        onChange={ onInputChange }
                        value={ textArea }
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={ () => onHandleSubmit(title, textArea, dispatch, navigate) }
                >   Submit  </button>
            </form>
        </div>
        
    )

}
