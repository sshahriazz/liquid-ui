function create({
  tag,
  appendTo,
  children = [],
  attributes = {},
  events = {},
}) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element[key] = value;
  });

  Object.entries(events).forEach(([key, value]) => {
    element.addEventListener(key, value);
  });

  if (appendTo) {
    appendTo.appendChild(element);
  }

  children.forEach((child) => element.appendChild(child));

  return element;
}
const gridContainer = document.getElementById("grid");

for (let i = 0; i < 4; i++) {
  const profilePhoto = create({
    tag: "img",
    attributes: {
      className: "inline-block h-10 w-10 rounded-full",
      src: "https://via.placeholder.com/150",
      alt: "profile photo",
    },
  });

  const profileDescription = create({
    tag: "div",
    attributes: { className: "inline-block" },
    children: [
      create({
        tag: "h1",
        attributes: { className: "text-base font-bold", textContent: "Fashion items-center Everyday" },
      }),
      create({
        tag: "p",
        attributes: {
          className: "text-xs text-gray-500 font-semibold",
          textContent: "2 days ago",
        },
      }),
    ],
  });

  const facebookIcon = create({
    tag: "img",
    attributes: {
      src: "./g12.png",
      alt: "facebook icon",
      className: "h-6 w-6",
    },
  });
  const flexIn = create({
    tag: "div",
    attributes: { className: "flex justify-start gap-3 items-center " },
    children: [profilePhoto, profileDescription],
  });
  const profile = create({
    tag: "div",
    attributes: { className: "flex justify-between items-center pt-8" },
    children: [flexIn, facebookIcon],
  });
  const coverImage = create({
    tag: "img",
    attributes: {
      className: "w-full h-64 object-cover rounded-xl",
      src: "https://via.placeholder.com/150",
      alt: "cover image",
    },
  });
  const caption = create({
    tag: "div",
    attributes: { className: "flex justify-between items-center py-4" },
    children: [
      create({
        tag: "p",
        attributes: {
          className: "text-xs text-gray-800",
          textContent: "Facebook is showing information to help you better understand.",
        },
      }),
    ],
  });
  const likesCount = create({
    tag: "p",
    attributes: {
      textContent: "1.2k Likes",
      className: "text-sm text-gray-500 font-semibold",
    },
  });
  const commentsCount = create({
    tag: "p",
    attributes: {
      textContent: "1.5k Comments",
      className: "text-sm text-gray-500 font-semibold",
    },
  });
  const interactionCounter = create({
    tag: "div",
    attributes: { className: "flex justify-start gap-5 items-center" },
    children: [likesCount, commentsCount],
  });

  const card = create({
    tag: "div",
    attributes: { id: "grid", className: "rounded-xl w-1/4 p-4 shadow-md" },
    children: [coverImage, profile, caption, interactionCounter],
  });

  gridContainer.appendChild(card);
}
