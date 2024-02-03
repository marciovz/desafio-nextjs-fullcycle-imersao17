import { Box, Container, Typography, colors } from "@mui/material";
import Link from "next/link";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostDetailParams {
  params: {
    postId: string;
  }
}

async function PostDetail({ params }: IPostDetailParams) {
  
  const response = await fetch(`${process.env.POST_REQUEST_URL}/${params.postId}`);
  const post: IPost = await response.json();
  
  return (
    <Container maxWidth="lg" >
      <Box mt={5} >
        <Link
          href={'/posts'}
          style={{ textDecoration: "none", fontSize: '20px', color: '#fff', padding: '10px 20px', borderRadius: '20px', background: '#546e7a' }}
        >Voltar</Link>
        <Box mt={5}>
          <Typography variant="h4" sx={{ color: colors.grey[200], mb: '20px', textAlign: 'center', textTransform: 'uppercase' }}>{post.title}</Typography>
          <Typography variant="h5" sx={{ color: colors.grey[500], minHeight: '400px', padding: '30px', borderRadius: '20px', background: colors.blueGrey[600] }}>{post.body}</Typography>   
        </Box>
      </Box>
    </Container>
  )
}

export default PostDetail;