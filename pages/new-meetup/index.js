import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
const addMeetupHandler = (enteredMeetupData) => {
  console.log(enteredMeetupData);
};
function NewMeetUpPage() {
  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUpPage;