import styles from "./Blogs.module.css";
import { Link } from "react-router-dom";
import emptyImage from "../../assets/empty-image.png";

function Blogs({ blogsData }) {
  return (
    <div className={styles["blogs-container"]}>
      {blogsData.map((item) => (
        <Link
          to={`/edit/${item._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          className={styles["blog-item"]}
          key={item._id}
        >
          <div style={{ flexGrow: 1 }}>
            <img
              src={item.image ? `https://mern-blog-app-server-production.up.railway.app/${item.filePath}` : emptyImage}
              alt="img"
            />
            <h3>#{item.category}</h3>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <h4>
            <span style={{ textTransform: "none" }}>Author: </span>
            {item.author}
          </h4>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
