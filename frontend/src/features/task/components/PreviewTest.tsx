import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import { Avatar, Box } from "@mui/material";
import DykTypography from "../../../components/UI/typography/DykTypography";

interface Task {
  id: number;
  name: string;
  description: string;
  img: string;
  author: string;
  date?: string;
}

interface Props {
  task: Task;
}

export default function PreviewTask({ task }: Props) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <Link
        to={`/task/description/${task.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea sx={{ height: "250px", width: "300px" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bgcolor: "rgba(0,0,0, 0.5)",
              py: 1,
              px: 2,
              display: "flex",
            }}
          >
            <Avatar alt="avatar" src={task.author ?? undefined} />
            <Box sx={{ overflow: "hidden", ml: 2 }}>
              <DykTypography
                text={`${task.name} asdasdasd adasdasdas as dasdasd asd asd`}
                variant="body1"
                sx={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              />
              <DykTypography text={task.date ?? "asdasdasd"} variant="body2" />
            </Box>
          </Box>
          {task.img ? (
            <CardMedia
              component="img"
              alt="image-task"
              image={task.img}
              sx={{ height: "100%" }}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                height: "100%",
                bgcolor: "#757575",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              Изображение отсутствует
            </Box>
          )}
          <CardContent
            sx={{
              px: 2,
              py: 1,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "rgba(0,0,0, 0.5)",
            }}
          >
            <Typography variant="body2" component="div">
              {task.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
