import Container from "./OuterContainer";
import PostOuter from "./Posts/PostOuter";

const posts = [
  {
    type: "text",
    title: "test post 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo minima molestiae nemo animi necessitatibus itaque ducimus beatae dignissimos nobis provident nulla, amet deserunt iusto ad architecto facilis cumque suscipit voluptates neque soluta tenetur! Deserunt dolor sapiente impedit dolores laudantium voluptate sunt qui.",
    date: new Date(),
    tags: ["test", "tag"]
  }
]

function Home() {
  return (
    <Container>
      {posts.map(post => {
        return <PostOuter {...post} />
      })}
    </Container>
  );
}

export default Home;
