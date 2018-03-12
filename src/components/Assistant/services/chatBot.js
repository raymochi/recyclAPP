export default function getReply(text) {
  text = text.toLowerCase();
  if (text.includes('how') && text.includes('you')) {
    return 'Great! Thanks for asking :)';
  }
  if (text.includes('morning')) {
    return 'Morning!';
  }
  if (text.includes('evening')) {
    return 'Good evening!';
  }
  if (text.includes('thanks')) {
    return 'No problem!';
  }
  if (text.includes('what') && text.includes('can') && text.includes('recycle')) {
    return 'In Whitby, you can recycle most metal, glass, plastic and paper, just be sure to seperate the paper into a serperate bin, and rinse off any containers';
  }
  if (text.includes('food') && text.includes('container')) {
    return 'Most containers can be recycled, just be sure to wash off any food, as that can contaminate the recycling process';
  }
  if (text.includes('pencil')) {
    return 'Unfornately pencils cannot be recycled as the mixture of wood and metal makes it too difficult';
  }
  if (text.includes('recycl') && text.includes('day')) {
    return 'Your recycling day just passed last Thursday!';
  }
  if (text.includes('recycle') && text.includes('this')) {
    return 'Let me take a look';
  }
  if (text.includes('recycl') && text.includes('can\'t')) {
    return 'Please do not put styrofoam, plastic bags, or wooden food crates into your blue bin';
  }
  if (['hi', 'hello', 'hey'].some((word) => text.includes(word))) {
    return 'Hey';
  }
  if (text.includes('can') && text.includes('?')) {
    return 'Sure, just tell me how';
  }
  if (text.includes('ok')) {
    return 'Right';
  }

  return 'I don\'t understand';
}