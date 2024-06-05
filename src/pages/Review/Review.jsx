/* eslint-disable react/no-unescaped-entities */

const Review = () => {
    return (
        <div className="my-12">
    <div className="text-center">
      <h2 className="text-4xl font-bold ">User Review</h2>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 px-6">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-full" src="https://i.ibb.co/YkXqq2g/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"Cuisine Oasis has allowed me to connect with fellow food lovers from around the world. The sense of community is fantastic, and I’ve learned so much from other users. It’s truly a platform that brings people together through the love of cooking and sharing recipes." - David </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-full"src="https://i.ibb.co/0hxN4HY/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"The user-friendly interface of Cuisine Oasis makes browsing and finding new recipes a breeze. I've found countless delicious meals to cook for my family. The personalized recommendations are spot-on, and I always look forward to exploring more." - John </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-full" src="https://i.ibb.co/CsWVT7b/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"Sharing my family recipes on Cuisine Oasis has been a wonderful experience. I love seeing others enjoy and recreate them. The platform is easy to use, and the feedback from the community has been very encouraging." - Peter</p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-full" src="https://i.ibb.co/sqqgDTw/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"Cuisine Oasis has transformed my cooking routine. The variety of recipes available is incredible, and the supportive community makes it even better. I've discovered so many new dishes to try, and it's now my go-to site for culinary inspiration." -  Mark </p>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Review;