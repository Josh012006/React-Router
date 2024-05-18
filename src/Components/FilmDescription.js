import { useParams } from "react-router-dom";
import movies from "../movies";


function FilmDescription () {
    const params = useParams();
    const objectMovie = JSON.parse(movies.find(j => {
        const ob = JSON.parse(j);
        return (ob.id === Number(params.id) && ob.title === params.name)
    }));

    return (
        <div className = "youtubeContainer" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', margin: "auto", marginTop: '60px', 
        marginBottom: '60px', backgroundColor: 'rgb(137, 233, 166)', padding: '10px', borderRadius:'10px'}}>
            <iframe className = "youtube" src = {objectMovie.trailer}
            title = {`${objectMovie.title} Official Trailer`}
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            <div style = {{padding: '20px'}}>
                <h2>{objectMovie.title}</h2>
                <p style = {{textIndent: '15px', textAlign: 'justify'}}>{objectMovie.description}</p>
            </div>
        </div>
    );
}

export default FilmDescription;