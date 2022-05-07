import Masonry from "@mui/lab/Masonry";

import HomeCard from "../CardLayout/components/HomeCard";
import ArchivedCard from "../CardLayout/components/ArchivedCard";
import TrashCard from "../CardLayout/components/TrashCard";

const CardLayout = ({ notes }) => {
    return (
        <Masonry>
            {notes.map((note, id) => (
                <>
                    {note.type === "home" && <HomeCard id={id} note={note} />}
                    {note.type === "archived" && (
                        <ArchivedCard id={id} note={note} />
                    )}
                    {note.type === "trash" && <TrashCard id={id} note={note} />}
                </>
            ))}
        </Masonry>
    );
};

export default CardLayout;
