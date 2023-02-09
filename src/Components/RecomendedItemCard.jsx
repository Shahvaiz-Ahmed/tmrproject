import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import recomended from './Static/images/recomended.png';

function RecomendedItemCard() {
  return (
    <div className="container">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={recomended}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CP80BK21-OR-204
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium, soluta quisquam qui deleniti minima fugit numquam omnis impedit eos nisi eaque recusandae natus veritatis ad perferendis, harum et? In soluta sequi iusto perspiciatis sit?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default RecomendedItemCard