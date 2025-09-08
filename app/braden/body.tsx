
// mui components setup
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

//mui presets
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const MIN = 0;
const MAX = 100;
const SLIDER_COUNT = 5;

export function Body() {
    return (
        <div className="flex h-screen">
            <div className="flex-[2_1_0%] min-w-0 overflow-hidden p-4 bg-blue-300">
            <h1 className="flex items-center justify-center pb-6 text-xl">Livestream Demo</h1>
            <Video />
            </div>
            <div className="flex-[1_1_0%] min-w-0 overflow-hidden p-4 bg-red-300">
                <h1 className="flex items-center justify-center pb-6 text-xl">Controls</h1>
                <div className="flex items-center justify-center pb-6">
                    <Presets />
                </div>
                <div className="flex items-center justify-center">
                    <MultiSliders />
                </div>
            </div>
        
        </div>
    )
}

export function Braden() {
    return (
    <div className="flex items-center justify-center pt-3 pb-6 text-3xl">
      <h1>"Braden was here"</h1>
    </div>
    );
}
export function Video() {
    return(
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/4TIpitPIsPA?si=VJkDSUyuFRcKcYtO?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}
export default function MultiSliders() {
  // keep all slider values in one array
  const [values, setValues] = React.useState<number[]>(
    Array(SLIDER_COUNT).fill(MIN) // [0,0,0,0,0]
  );

  const handleChange = (index: number, newValue: number) => {
    setValues((prev) => {
      const copy = [...prev];
      copy[index] = newValue;
      return copy;
    });
  };

  return (
    <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {values.map((val, index) => (
        <Box key={index}>
          <Typography variant="subtitle2">Control #{index + 1}</Typography>
          <Slider
            step={10}
            value={val}
            valueLabelDisplay="auto"
            min={MIN}
            max={MAX}
            onChange={(_, newValue) => handleChange(index, newValue as number)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="body2"
              onClick={() => handleChange(index, MIN)}
              sx={{ cursor: 'pointer' }}
            >
              {MIN} min
            </Typography>
            <Typography
              variant="body2"
              onClick={() => handleChange(index, MAX)}
              sx={{ cursor: 'pointer' }}
            >
              {MAX} max
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export function Presets() {
    return(
        <div className="flex flex- gap-4">
            <Button variant="contained">ALL 0%</Button>
            <Button variant="contained">ALL 100%</Button>
        </div>

    )
};