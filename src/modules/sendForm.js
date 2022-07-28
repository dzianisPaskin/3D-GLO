import { validate } from "schema-utils";

const sendForm = ({ formId_1, formId_2, formId_3, someElem = [] }) => {
  const form_1 = document.getElementById(formId_1);
  const form_2 = document.getElementById(formId_2);
  const form_3 = document.getElementById(formId_3);
  const statusBlock = document.createElement("div");
  const loadText = "Load...";
  const errorText = "Error";
  const successText = "Спасибо! наш менеджер с вами свяжется";

  const validate = (list) => {
    let success = true;

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = (form) => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    console.log("submit");

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((e) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны");
    }
  };

  try {
    if (!form_1) {
      throw new Error("Верните форму насто, пожаааалуйста)");
    } else if (!form_3) {
      throw new Error("Верните форму насто, пожаааалуйста)");
    } else if (!form_3) {
      throw new Error("Верните форму насто, пожаааалуйста)");
    }

    form_1.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm(form_1);
    });
    form_2.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm(form_2);
    });
    form_3.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm(form_3);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
