import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import React from "react";
import InputFormCategory from "./InputFormCategory";

function ModelCreateNewCategory({
  onHandleCloseButton,
  onHandleCreateNewCategory,
}) {
  const handleClick = () => {
    onHandleCloseButton();
  };

  let stateShowForm = useSelector(
    (stateRedux) => stateRedux.showFormState.showForm
  );

  return (
    <div>
      <Modal isOpen={stateShowForm}>
        <ModalHeader>Create New Category</ModalHeader>
        <ModalBody>
          <InputFormCategory
            onHandleCreateNewCategory={onHandleCreateNewCategory}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClick}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModelCreateNewCategory;
