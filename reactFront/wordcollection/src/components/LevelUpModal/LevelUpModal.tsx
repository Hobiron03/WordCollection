import React, { useState, useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./LevelUpModal.scss";
import returnMyDegree from "../returnMyDegree";
import AppContext from "../../contexts/AppContext";

interface LelevUpModalProps {
  toggleModalState: Function;
}

const LevelUpModal = (props: LelevUpModalProps) => {
  const { state } = useContext(AppContext);

  const [open, setOpen] = useState(true);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: "1%",
        boxShadow: theme.shadows[5],
        border: `3px solid #087aff`,
        padding: theme.spacing(2, 4, 3),
        width: 450,
        transition: "all 0.2s",
      },
      colorBallet: {
        border: "2px solid #000000",
      },
    })
  );
  const classes = useStyles();

  const displayGetDegree = () => {
    if (returnMyDegree(state.level) === returnMyDegree(state.level + 1)) {
      return (
        <p className="paper__levelUp__desc">
          おめでとう！！これからもまだまだがんばろう!!
        </p>
      );
    } else {
      return (
        <p className="paper__levelUp__desc">
          称号獲得!{" "}
          <span className="paper__levelUp__desc__degree">
            「{returnMyDegree(state.level + 1)}」
          </span>
        </p>
      );
    }
  };

  const handleClose = () => {
    setOpen(false);
    props.toggleModalState();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 className="paper__levelUp">Level UP!!</h1>
            <div className="paper__display_diff">
              <h1 className="paper__display_diff__before">Lv. {state.level}</h1>
              <ChevronRightIcon fontSize="large"></ChevronRightIcon>
              <h1 className="paper__display_diff__after">{state.level + 1}</h1>
            </div>
            {displayGetDegree()}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default LevelUpModal;
