import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon.Mt.Taal boasts a Volcano inside an island.If you fancy a closer look,the hike up to the crator is a mere 45minutes,and is easy enough for begginners.Guides will assist you most of the way,and you'll see the pecular environment found on an active volcano, including volcanic rocks and steam vents.The hike can be dusty and hot,so plan for an early morning trip,and then unwind with some bulalo before heading back home!"
        img1={
          "https://images.unsplash.com/photo-1578841459285-16c1c03b3473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        }
        img2={
          "https://images.unsplash.com/photo-1493604480588-31082be2c411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=498&q=80"
        }
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul,Batangas"
        text="if you're looking for a hike that's a little more challenging but still good for a beginner mountaineer ,checkout Mt. Daguldul in San Juan,Batangas.You'll start your hike from the beach and pass through tropical forest,diffrent rock formation,and small streams.There's a small store halfway up the trail where you can take a break and drink buko drinks ,though the summit itself may not have the best view,the breeze is fantastic.Once you've made it back down,head straight to the beach for a refreshing,well-deserved swim "
        img1={
          "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        img2={
          "https://images.unsplash.com/photo-1482647397731-1f423251b1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
    </div>
  );
};
export default Destination;
