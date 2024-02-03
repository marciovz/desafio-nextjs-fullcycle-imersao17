import Link from "next/link";
import { Box, Typography, colors } from "@mui/material";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostProps {
  post: IPost;
}

export function TitlePostItem({ post }: IPostProps) {

  return (
    <Link
      href={`/posts/${post.id}`}
      style={{ textDecoration: "none", width: '100%' }}
    >
      <Box sx={{ width: '100%', margin: '10px', padding: '20px', borderRadius: '20px', background: colors.blueGrey[600] }}>
        <Typography variant="h5" sx={{ color: colors.grey[200] }}>{post.title}</Typography>
      </Box>
    </Link>
  )
}