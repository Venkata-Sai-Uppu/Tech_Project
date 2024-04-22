import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Catalyst = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [qaList] = useState([
    { name: 'Alice', question: '1.What is Catalyst?', answer: 'Ans: A Catalyst is used for getting the details of courses for all the branches that you have to take based on the season in all semesters.' },
    { name: 'Bob', question: '2.How to view the Courses in Catalyst?', answer: 'Ans: Navigate to the My academics, click on search for classes and mention the season or term & subject & course career to register for the courses' },
    { name: 'Bob', question: 'View more' },
  ]);

  const submitQuestion = () => {
    // Handle the submission of the question and the answer
    console.log(question, answer);
    // After submission, you might want to clear the fields or navigate to another screen
    setQuestion('');
    setAnswer('');
  };

  // Calculate the filtered list here, inside the component, before it's used in the JSX
  const filteredQAList = nameFilter
    ? qaList.filter(qa => qa.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : qaList;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>HOME FEED</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Questions & Answers</Text>
        {/* Display recent questions and answers here */}
        <TextInput
          style={styles.input}
          placeholder="Filter by name"
          value={nameFilter}
          onChangeText={setNameFilter}
        />
        {filteredQAList.map((qa, index) => (
          <View key={index.toString()} style={styles.qaItem}>
            <Text style={[styles.questionText,styles.bold]}>{qa.question}</Text>
            <Text style={styles.answerText}>{qa.answer}</Text>
          </View>
          
        ))}
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Post Question:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type the question"
          value={question}
          onChangeText={setQuestion}
        />
        <TextInput
          style={styles.input}
          placeholder="Type the answer"
          value={answer}
          onChangeText={setAnswer}
        />
        <TouchableOpacity style={styles.button} onPress={submitQuestion}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Catalyst;
