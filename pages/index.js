import MeetupList from '../components/meetups/MeetupList'; 


const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Semmozhi-Poonga.jpg',
        address:'Some Address 5, 12345 Some City',
        description:'This is a first meetup!'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Semmozhi-Poonga.jpg',
        address:'Some Address 10, 12345 Some City',
        description:'This is a second meetup!'
    }
];
const HomePage = (props) => {
return <MeetupList meetups={props.meetups} />
}
export async function getStaticProps() {
    return {
        props:{
            meetups:DUMMY_MEETUPS
        }
    }
}

export default HomePage;