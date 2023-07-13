import { useSelector } from "react-redux"

export const getPostById = ( id ) => {

    const { posts } = useSelector( state => state.foro );
    return posts.find( post => post.id === id );

}
