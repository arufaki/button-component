import { AddShoppingCartRounded } from '@mui/icons-material';


const buttonConfig = [
  {
    id: 1,
    buttons: [
      {
        id: "primary",
        title: "<Button />",
        color: "primary",
        defStyle: "defaultPrimary",
      },
      {
        id: "hoverPrimary",
        title: "&:hover, &:focus",
        color: "primaryHover",
        defStyle: "defaultPrimary",
      },
    ],
  },
  {
    id: 2,
    buttons: [
      {
        id: "outline",
        title: '<Button variant:"outline" />',
        color: "outline",
        defStyle: "defaultOutline",
      },
      {
        id: "hoverOutline",
        title: "&:hover, &:focus",
        color: "outlineHover",
        defStyle: "defaultOutline",
      },
    ],
  },
  {
    id: 3,
    buttons: [
      {
        id: "text",
        title: '<Button variant:"text" />',
        defStyle: "defaultText",
      },
      {
        id: "hoverText",
        title: "&:hover, &:focus",
        color: "outlineHover",
        defStyle: "defaultText",
      },
    ],
  },
  {
    id: 4,
    buttons: [
      {
        id: "disableShadow",
        title: '<Button disableShadow />',
        color: "disableShadow",
      },
     
    ],
  },
  {
    id: 5,
    buttons: [
      {
        id: "disabled",
        title: '<Button disabled />',
        text: "Disabled",
        color: "primary",
        defStyle: "defaultDisabled",
        disable:"disabled",
      },
      {
        id: "textDisabled",
        title: "<Button variant=”text” disabled />",
        text: "Disabled",
        defStyle: "defaultDisabled",
        disable:"disabled",
      }
     
    ],
  },
  {
    id: 6,
    buttons: [
      {
        id: "startIcon",
        title: '<Button startIcon=”local_grocery_store” />',
        color: "disableShadow",
        defStyle: "defaultIcon",
        startIcon: <AddShoppingCartRounded className="text-white text-sm" fontSize="small"/>,
      },
      {
        id: "endIcon",
        title: '<Button endIcon=”local_grocery_store” />',
        color: "disableShadow",
        defStyle: "defaultIcon",
        endIcon: <AddShoppingCartRounded className="text-white text-sm" fontSize="small"/>,
      }
    ],
  },
  {
    id: 7,
    buttons: [
      {
        id:"small",
        title:"<Button size=”sm” />",
        color:"disableShadow",
        size:"sm",
      },
      {
        id:"medium",
        title:"<Button size=”md” />",
        color:"disableShadow",
      },
      {
        id:"large",
        title:"<Button size=”lg” />",
        color:"disableShadow",
        size:"lg",
      }
    ],
  },
  {
    id: 8,
    buttons: [
      {
        id:"default",
        title:"<Button color=”default” />",
        color:"primary",
      },
      {
        id:"primarys",
        title:"<Button color=primary />",
        color:"disableShadow",
      },
      {
        id:"secondary",
        title:"<Button color=secondary />",
        text: "Secondary",
        color:"secondary",
      },
      {
        id:"danger",
        title:"<Button color=danger />",
        text: "Danger",
        color:"danger",
      }
    ],
  },
  {
    id: 9,
    buttons: [
      {
        id:"hoverPrimary",
        title:"&:hover, &:focus",
        color:"primaryHover",
      },
      {
        id:"hoverBlue",
        color:"disableHover",
      },
      {
        id:"hoverSecondary",
        text: "Secondary",
        color:"secondaryHover",
      },
      {
        id:"hoverDanger",
        text: "Danger",
        color:"dangerHover",
      }
    ],
  },
];

export default buttonConfig;
