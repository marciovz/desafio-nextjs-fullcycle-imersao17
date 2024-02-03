import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { TitlePostItem } from './titlePostItem';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function Posts() {
  const response = await fetch(`${process.env.POST_REQUEST_URL}`);
  const postList: IPost[] = await response.json();

  return (
    <Container maxWidth="lg" >
      <Grid2  container spacing={2} mt={10}>
        { postList.map(post => (
          <TitlePostItem key={post.id} post={post} />
        ))}
      </Grid2>
    </Container>
  )
}

export default Posts;