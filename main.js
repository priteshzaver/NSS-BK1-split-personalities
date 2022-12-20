const originalDisorderFormat =
  'Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia'

const splitDisorderFormat = originalDisorderFormat.split('|$|');
const listDisorderFormat = splitDisorderFormat.join('</div>\n<div>'); 
        /*
            If you were to put only \n in the .join(), it would print the div tags in the console.log 
            at the beginning and end of the entire string instead of each line.
        */
console.log(`<div>${listDisorderFormat}</div>`);