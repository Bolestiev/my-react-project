// import { Alert } from "./Alert/Alert";

import Alert from "./Alert/Alert";
import BookList from "./BookList/BookList";
import Card from "./Card/Card";
import Mailbox from "./Mailbox/Mailbox";
import Product from "./Product/Product";
import UserMenu from "./UserMenu/UserMenu";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import BlogCard from "./BlogCard/BlogCard";
import article from "../article.json";
import { Statistics } from "./Statistics/Statistics";
import stats from "../stats.json";

function App() {
  const username = "John";
  const unreadMessages = ["Welcome!", "Your order has been shipped."];
  const age = 27;
  const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
  ];

  return (
    <div>
      <UserMenu name="John Doe" />

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>

      <h1>Welcome to My App</h1>
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      {age > 28 ? "COW" : "PIG"}
      <h1>Best selling</h1>
      <Mailbox name={username} unreadMessages={unreadMessages} />

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Croissant"
        imgUrl="https://images.pexels.com/photos/28918437/pexels-photo-28918437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        price={9.99}
      />
      <Product
        name="Ratatouille"
        imgUrl="https://molbuk.ua/uploads/posts/2020-04/1588254229_1588252909-2219.jpg"
        price={18.71}
      />

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

      <BlogCard
        poster={article.poster}
        tag={article.tag}
        title={article.title}
        description={article.description}
        userName={article.name}
        avatar={article.avatar}
        postedAt={article.postedAt}
      />

      <Statistics title="Main Statistics" stats={stats} />
      <Statistics stats={stats} />
    </div>
  );
}

export default App;
