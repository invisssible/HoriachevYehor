const first_non_repeating_letter = word => {
  if (word.length === 1) {
    return word;
  } else {
    let letter_to_return = "";
    word_as_array = word.to_lower_case().split("");
    word_as_array.some((letter, index) => {
      if (word_as_array.index_of(letter) === word_as_array.last_index_of(letter)) {
        letter_to_return = word[index];
        return true;
      }
    });
    return letter_to_return;
  }
};