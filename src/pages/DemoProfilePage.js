import { useState, useEffect } from "react";
import axios from "axios";

const DemoProfilePage = () => {
  const [journalData, setJournalData] = useState([]);
  const [entry, setEntry] = useState({});
  const [startJournaling, setStartJournaling] = useState(false);

  const getJournalEntries = () => {
    axios
      .get("/api/entries/")
      .then((response) => {
        const data = response.data;
        setJournalData(data);
        setEntry(data[0]);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const recordJournalEntry = () => {
    const title = document.getElementById("journal-title").value;
    const content = document.querySelector("[contenteditable]").innerHTML;
    if (!title)
      return alert(
        "You don't have a title. It is important to give your wonderful day a title so you have a good reference to remember it by!",
      );
    if (content.length < 20)
      return alert(
        "Your Journaling is too short. Try to elaborate on your thoughts about what makes you feel happy today!",
      );

    axios
      .post("/api/entries/", { title, content })
      .then((response) => getJournalEntries())
      .catch((error) =>
        console.log("error processing entry: ", error.response),
      );

    setStartJournaling(false);
  };

  const changeEntryView = (data) => {
    setEntry(data);
  };

  const deleteEntry = (id) => {
    axios.delete(`/api/entries/${id}/`).then((response) => getJournalEntries());
  };

  useEffect(() => {
    getJournalEntries();
  }, []);

  return (
    <div id="demo">
      <h1>My Thankful Journal Profile Page &#40;Demo&#41;</h1>
      <div className="journal-container">
        <div className="journal-content">
          <h2>View Journal Entries</h2>
          {journalData.length ? (
            <div className="journal-entries">
              <div className="box journal-box">
                <h3>Entries Dates:</h3>
                {journalData.map((data) => (
                  <div
                    key={data.id}
                    onClick={() => changeEntryView(data)}
                    className="entry-dates"
                  >
                    {new Date(data.created_at).toLocaleDateString()}
                  </div>
                ))}
              </div>
              <div className="box journal-box">
                <h3>{entry.title}</h3>
                <p>Date: {new Date(entry.created_at).toLocaleString()}</p>
                <div className="journal-context">
                  <p>{entry.content}</p>
                  <button
                    className="destructive-btn"
                    onClick={() => deleteEntry(entry.id)}
                  >
                    Delete this entry
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="journal-empty">
              You don't have any Entries. Start writing in your journal to have
              wonderful memories!
            </p>
          )}
        </div>
        <div className="journal-content">
          {startJournaling ? (
            <div>
              <h2>Journaling in progress...</h2>
              <div className="journal-title">
                <label htmlFor="journal-title">Title:</label>
                <input type="text" id="journal-title" />
              </div>

              <div className="box writing">
                <div className="textarea" contentEditable="true">
                  Start Here...
                </div>
              </div>
              <div className="btn-container">
                <button
                  className="destructive-btn"
                  onClick={() => setStartJournaling(false)}
                >
                  Cancel
                </button>
                <button
                  className="constructive-btn"
                  onClick={() => recordJournalEntry()}
                >
                  Record
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2>Add To Journal</h2>
              <button
                className="constructive-btn"
                onClick={() => setStartJournaling(true)}
              >
                Start Journaling
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoProfilePage;
