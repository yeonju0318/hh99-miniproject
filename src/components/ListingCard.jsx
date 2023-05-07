import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "./LikeButton";

function ListingCard({
  id,
  feel,
  weather,
  genre,
  likeStatus,
  likeCount,
  likeLists,
}) {
  const feelWeather = `SADCLOUD`;
  let startColor = "";
  let endColor = "";
  switch (feelWeather) {
    case "HAPPYSUN":
      startColor = "#FEE12B";
      endColor = [
        "#FBBF24",
        "#FFD73E",
        "#FFA71A",
        "#FF7F00",
        "#FF4D00",
        "#FF220C",
        "#FF0061",
        "#C7008B",
        "#8F00AB",
        "#32f518",
      ][Math.floor(Math.random() * 10)];
      break;
    case "HAPPYCLOUD":
      startColor = "#F2F2F2";
      endColor = [
        "#D9D9D9",
        "#C4C4C4",
        "#ACACAC",
        "#959595",
        "#7E7E7E",
        "#676767",
        "#505050",
        "#393939",
        "#232323",
        "#0C0C0C",
      ][Math.floor(Math.random() * 10)];
      break;
    case "HAPPYRAIN":
      startColor = "#00BFFF";
      endColor = [
        "#00C3FF",
        "#00D8FF",
        "#00E3FF",
        "#00EEFF",
        "#00F9FF",
        "#00FFFF",
        "#00FFF6",
        "#00FFEB",
        "#00FFDA",
        "#00FFCE",
      ][Math.floor(Math.random() * 10)];
      break;
    case "HAPPYSNOW":
      startColor = "#FFFFFF";
      endColor = [
        "#E6E6E6",
        "#CCCCCC",
        "#B3B3B3",
        "#999999",
        "#808080",
        "#666666",
        "#4D4D4D",
        "#333333",
        "#1A1A1A",
        "#000000",
      ][Math.floor(Math.random() * 10)];
      break;
    case "HAPPYSTORM":
      startColor = "#8B0000";
      endColor = [
        "#FF1300",
        "#FF361E",
        "#FF5B3B",
        "#FF7F59",
        "#FFA27A",
        "#FFC19C",
        "#FFDDC0",
        "#FFE9D6",
        "#FFF4ED",
        "#FFFFFF",
      ][Math.floor(Math.random() * 10)];
      break;
    case "SADSUN":
      startColor = "#B0E0E6";
      endColor = [
        "#ADD8E6",
        "#A0CEE6",
        "#94C4E6",
        "#87BAE6",
        "#7AB0E6",
        "#6DA6E6",
        "#609CE6",
        "#5492E6",
        "#4788E6",
        "#3A7EE6",
      ][Math.floor(Math.random() * 10)];
      break;
    case "SADCLOUD":
      startColor = "#A9A9A9";
      endColor = [
        "#B5B5B5",
        "#BABABA",
        "#C0C0C0",
        "#C6C6C6",
        "#CBCBCB",
        "#D1D1D1",
        "#D7D7D7",
        "#DCDCDC",
        "#E2E2E2",
        "#E7E7E7",
      ][Math.floor(Math.random() * 10)];
      break;
    case "SADRAIN":
      startColor = "#696969";
      endColor = [
        "#777777",
        "#7C7C7C",
        "#818181",
        "#868686",
        "#8B8B8B",
        "#909090",
        "#959595",
        "#9A9A9A",
        "#9F9F9F",
        "#A4A4A4",
      ][Math.floor(Math.random() * 10)];
      break;
    case "SADSNOW":
      startColor = "#E6E6FA";
      endColor = [
        "#D8D8FA",
        "#D0D0F5",
        "#C8C8F0",
        "#C0C0EB",
        "#B8B8E6",
        "#B0B0E1",
        "#A8A8DC",
        "#A0A0D7",
        "#9898D2",
        "#9090CD",
      ][Math.floor(Math.random() * 10)];
      break;
    case "SADSTORM":
      startColor = "#2F4F4F";
      endColor = [
        "#264545",
        "#285858",
        "#2B6B6B",
        "#2D7D7D",
        "#308F8F",
        "#339F9F",
        "#35B0B0",
        "#37C0C0",
        "#39D1D1",
        "#3BE3E3",
      ][Math.floor(Math.random() * 10)];
      break;

    case "ANGERSUN":
      startColor = "#FF4500";
      endColor = [
        "#FF592E",
        "#FF6C3C",
        "#FF7F4A",
        "#FF9258",
        "#FFA46F",
        "#FFB787",
        "#FFCA9E",
        "#FFDDB6",
        "#FFEFCF",
        "#FFFEE7",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANGERCLOUD":
      startColor = "#808080";
      endColor = [
        "#737373",
        "#757575",
        "#787878",
        "#7A7A7A",
        "#7C7C7C",
        "#7E7E7E",
        "#808080",
        "#828282",
        "#848484",
        "#868686",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANGERRAIN":
      startColor = " #FF0000";
      endColor = [
        "#FF4040",
        "#FF5252",
        "#FF6262",
        "#FF7171",
        "#FF8181",
        "#FF9191",
        "#FFA0A0",
        "#FFB0B0",
        "#FFC0C0",
        "#FFD0D0",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANGERSNOW":
      startColor = "#800000";
      endColor = [
        "#993232",
        "#9F3838",
        "#A64040",
        "#AB4646",
        "#B14C4C",
        "#B75454",
        "#BC5A5A",
        "#C26060",
        "#C86666",
        "#CE6C6C",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANGERSTORM":
      startColor = "#483D8B";
      endColor = [
        "#4B4D8B",
        "#51538B",
        "#575A8B",
        "#5D608B",
        "#63668B",
        "#696C8B",
        "#6F718B",
        "#75778B",
        "#7B7E8B",
        "#81838B",
      ][Math.floor(Math.random() * 10)];
      break;

    case "ANXIETYSUN":
      startColor = "#FFE4B5";
      endColor = [
        "#FFDFB5",
        "#FFE2B6",
        "#FFE5B7",
        "#FFE8B8",
        "#FFEBB9",
        "#FFEEBA",
        "#FFF1BB",
        "#FFF4BC",
        "#FFF7BD",
        "#FFFABE",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANXIETYCLOUD":
      startColor = "#C0C0C0";
      endColor = [
        "#C2C2C2",
        "#C4C4C4",
        "#C6C6C6",
        "#C8C8C8",
        "#CACACA",
        "#CCCCCC",
        "#CECECE",
        "#D0D0D0",
        "#D2D2D2",
        "#D4D4D4",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANXIETYRAIN":
      startColor = "#696969";
      endColor = [
        "#6B6B6B",
        "#707070",
        "#747474",
        "#797979",
        "#7D7D7D",
        "#828282",
        "#878787",
        "#8C8C8C",
        "#919191",
        "#969696",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANXIETYSNOW":
      startColor = "#B0C4DE";
      endColor = [
        "#B2C9DF",
        "#B5CDDF",
        "#B8D2DF",
        "#BBD6DF",
        "#BEDBDF",
        "#C1DFDF",
        "#C4E4DF",
        "#C7E8DF",
        "#CAEDDF",
        "#CDEFDF",
      ][Math.floor(Math.random() * 10)];
      break;
    case "ANXIETYSTORM":
      startColor = "#2F4F4F";
      endColor = [
        "#325B5B",
        "#366362",
        "#3A696B",
        "#3D6E70",
        "#417374",
        "#447978",
        "#487D7D",
        "#4B8282",
        "#4E8787",
        "#528C8C",
      ][Math.floor(Math.random() * 10)];
      break;

    case "LOVESUN":
      startColor = "#FF69B4";
      endColor = [
        "#FF80BF",
        "#FF85C3",
        "#FF8AC7",
        "#FF90CA",
        "#FF95CE",
        "#FF9AD2",
        "#FF9FD5",
        "#FFA4D9",
        "#FFAADE",
        "#FFAFF2",
      ][Math.floor(Math.random() * 10)];
      break;
    case "LOVECLOUD":
      startColor = "#D3D3D3";
      endColor = [
        "#DCDCDC",
        "#DEDEDE",
        "#E0E0E0",
        "#E2E2E2",
        "#E4E4E4",
        "#E6E6E6",
        "#E8E8E8",
        "#EAEAEA",
        "#ECECEC",
        "#EEEEEE",
      ][Math.floor(Math.random() * 10)];
      break;
    case "LOVERAIN":
      startColor = "#9370DB";
      endColor = [
        "#F0E6FF",
        "#F2E8FF",
        "#F4EBFF",
        "#F6EEFF",
        "#F8F1FF",
        "#FAF3FF",
        "#FCF6FF",
        "#FEF9FF",
        "#FFFFFF",
        "#FDFDFF",
      ][Math.floor(Math.random() * 10)];
      break;
    case "LOVESNOW":
      startColor = "#FFE4E1";
      endColor = [
        "#FFF5F4",
        "#FFF6F4",
        "#FFF8F5",
        "#FFF9F6",
        "#FFFBF7",
        "#FFFCF8",
        "#FFFDF9",
        "#FFFEFA",
        "#FFFFFB",
        "#FFFFFC",
      ][Math.floor(Math.random() * 10)];
      break;
    case "LOVESTORM":
      startColor = "#FF1493";
      endColor = [
        "#FFDCF7",
        "#FFDAF6",
        "#FFD8F6",
        "#FFD5F5",
        "#FFD3F5",
        "#FFD0F4",
        "#FFCEF4",
        "#FFCBF3",
        "#FFC9F3",
        "#FFC6F2",
      ][Math.floor(Math.random() * 10)];
      break;

    case "EXPECTSUN":
      startColor = "#00FF7F";
      endColor = [
        "#00FFCC",
        "#00FFD1",
        "#00FFD7",
        "#00FFDC",
        "#00FFE1",
        "#00FFE7",
        "#00FFEC",
        "#00FFF1",
        "#00FFF7",
        "#00FFFC",
      ][Math.floor(Math.random() * 10)];
      break;
    case "EXPECTCLOUD":
      startColor = "#A9A9A9";
      endColor = [
        "#BEBEBE",
        "#C4C4C4",
        "#CACACA",
        "#D1D1D1",
        "#D7D7D7",
        "#DDDDDD",
        "#E3E3E3",
        "#E9E9E9",
        "#F0F0F0",
        "#F6F6F6",
      ][Math.floor(Math.random() * 10)];
      break;
    case "EXPECTRAIN":
      startColor = "#008080";
      endColor = [
        "#006B6B",
        "#005C5C",
        "#004D4D",
        "#003E3E",
        "#002F2F",
        "#001F1F",
        "#008B8B",
        "#009B9B",
        "#00ABAB",
        "#00BBBB",
      ][Math.floor(Math.random() * 10)];
      break;
    case "EXPECTSNOW":
      startColor = "#B0E0E6";
      endColor = [
        "#8CD4E9",
        "#77CCE6",
        "#61C5E3",
        "#4BBDDE",
        "#35B6DB",
        "#1FADD8",
        "#09A6D5",
        "#0898C6",
        "#078AB7",
        "#067DA9",
      ][Math.floor(Math.random() * 10)];
      break;
    case "EXPECTSTORM":
      startColor = "#9400D3";
      endColor = [
        "#9F08D7",
        "#A810DE",
        "#B219E4",
        "#BC22EB",
        "#C42AEE",
        "#CD32F0",
        "#D53AF2",
        "#DD41F4",
        "#E549F5",
        "#EE51F6",
      ][Math.floor(Math.random() * 10)];
      break;
  }

  return (
    <div className="group col-span-1 cursor-pointer">
      <Link to="#">
        <div className="flex flex-col gap-2 w-full ">
          <div className="aspect-square w-full relative overflow-hidden rounded-xl">
            <StyledDiv startColor={startColor} endColor={endColor} />

            <div className="absolute top-3 right-3">
              <LikeButton
                likeStatus={likeStatus}
                likeCount={likeCount}
                id={id}
                likeLists={likeLists}
              />
            </div>
          </div>
          <div className="flex">
            <button>{`#${feel} `}</button>
            <button className="pl-4">{`#${weather} `} </button>
            <button className="pl-4">{`#${genre} `} </button>
          </div>
          <div className="font-semibold">가수</div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">노래제목</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

const StyledDiv = styled.div`
  background: ${(props) =>
    `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`};
  width: 100%;
  height: 100%;
`;

export default ListingCard;
