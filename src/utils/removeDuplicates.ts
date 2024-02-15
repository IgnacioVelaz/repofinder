// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeDuplicates = (array: Array<any>) => {
  const unique = array.reduce((prevItem, currentItem) => {
    if (!prevItem.includes(currentItem)) prevItem.push(currentItem);
    return prevItem;
  }, []);
  return unique;
};

export default removeDuplicates;
