import { addNewPost, resetReducer } from "../../store/foro/foroSlice";
import { v4 as uuidv4 } from "uuid";


export const onHandleSubmit = ( title, textArea, dispatch, navigate ) => {

    event.preventDefault();

    if(title.length > 1 && textArea.length > 10) {

        let id = uuidv4();

        dispatch( addNewPost({ 
            title, 
            textArea, 
            id 
        }) );

        dispatch( resetReducer() );

        navigate( '/', { replace: true} );

    } else {

        throw new Error( "Ocurrió un error en el armado del post." )

    }

}