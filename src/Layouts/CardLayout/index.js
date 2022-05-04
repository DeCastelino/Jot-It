import Masonry from "@mui/lab/Masonry";

import HomeCard from "../CardLayout/components/HomeCard";
import ArchivedCard from "../CardLayout/components/ArchivedCard";
import TrashCard from "../CardLayout/components/TrashCard";

const CardLayout = ({ notes }) => {
    return (
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 7 }} spacing={2}>
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
