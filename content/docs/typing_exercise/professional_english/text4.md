---
title: "Unit 10 Section A"
---

# Computer Security

## I. A Definition of Computer Security

The NIST Computer Security Handbook defines *computer security* as follows:

The protection afforded to an automated information system in order to attain the applicable objectives of preserving the integrity, availability, and **confidentiality** of information system resources (including hardware, software, firmware, information/data, and telecommunications).

This definition introduces three key objectives that are at the heart of computer security:

- **Confidentiality**: This term covers two related concepts:
  - **Data confidentiality**: Assures that private or confidential information is not made available or disclosed to unauthorized individuals.
  - **Privacy**: Assures that individuals control or influence what information related to them may be collected and stored and by whom and to whom that information may be disclosed.
- **Integrity**: This term covers two related concepts:
  - **Data integrity**: Assures that information and programs are changed only in a specified and authorized manner.
  - **System integrity**: Assures that a system performs its intended function in an **unimpaired** manner, free from deliberate or inadvertent unauthorized manipulation of the system.
- **Availability**: Assures that systems work promptly and service is not denied to authorized users.

These three concepts from what is often referred to as CIA **triad**. Although the use of the CIA triad to define security objectives is well established, some in the security field feel that additional concepts are needed to present a complete picture. Two of the most commonly mentioned are as follows.

- **Authenticity**: The property of being genuine and being able to be verified and trusted; confidence in the **validity** of a transmission, a message, or a message **originator**. This means verifying that users are who they say they are and that each input arriving at the system came from a trusted source.
- **Accountability**: The security goal that generates the requirement for actions of an entity to be traced uniquely to that entity. This supports **nonrepudiation**, **deterrence**, **fault isolation**, intrusion detection and prevention, and after-action recovery and legal action. Because truly secure systems aren't yet an achievable goal, we must be able to trace a security **breach** to a responsible party. Systems must keep records of their activities to permit later **forensic** analysis to trace security breaches or to aid in transaction disputes.

## II. Threats and Assets

The assets of a computer system can be categorized as hardware, software, data, and communication lines and networks. We will briefly describe these four categories and relate them to the concepts of integrity, confidentiality, and availability.

### 1. Hardware

A major threat to hardware is the threat to availability. Hardware is the most vulnerable to attack and the least **susceptible** to automated controls. Threats include accidental and deliberate damage to equipment as well as theft. The **proliferation** of personal computers and workstations and the widespread use of LANs increase the potential of losses in the area. Theft of CD-ROMs and DVDs can lead to loss of confidentially. Physical and administrative security measures are needed to deal with these threats.

### 2. Software

A key threat to software is an attack on availability. Software, especially application software, is often easy to delete. Software can also be altered or damaged to render it useless. Careful software configuration management, which includes making backups of the most recent version of software, can maintain high availability. A more difficult problem to deal with is software modification that results in a program that still functions but behaves differently than before, which is a threat to integrity/authenticity. Computer viruses and related attacks fall into this category. A final problem is protection against software **piracy**. Although certain **countermeasures** are available, by and large the problem of unauthorized copying of software has not been solved.

### 3. Data

Security concerns with respect to data are broad, encompassing availability, secrecy, and integrity. In the case of availability, the concern is with the destruction of data files, which can occur either accidentally or maliciously.

The obvious concern with secrecy is the unauthorized reading of data files or databases, and this area has been the subject of perhaps more research and effort than any other area of computer security. A less obvious threat to secrecy involves the analysis of data and manifests itself in the use of so-called statistical databases, which provide summary or **aggregate** information. As the use of statistical databases grows, there is an increasing potential for **disclosure** of personal information. For example, if one table records the **aggregate** of the incomes of **respondents** A, B, C, and D and another records the aggregate of the incomes of A, B, C, D and E, the difference between the two aggregates would be the income of E.

Finally, data integrity is a major concern in most installations. Modifications to data files can have consequences ranging from minor to **disastrous**.

### 4. Communication Lines and Networks

Network security attacks can be classified as *passive attacks* and *active attacks*. A passive attack attempts to learn or make use of information from the system but does not affext system resources. An active attack attempts to alter system resources or affect their operation.

**Passive attacks** are in the nature of **eavesdropping** on, or monitoring of, transmissions. The goal of the attacker is to obtain information that is being transmitted. Two types of passive attacks are release of message contents and traffic analysis.

The **release of message contents** is easily understood. A telephone conversation, an electronic mail message, and a transferred file may contain sensitive or confidential information. We would like to prevent an opponent from learning the contents of these transmissions.

**Traffic analysis** is **subtler**. If we had encryption protection in place, an **opponent** might still be able to observe the pattern of messages. The opponent could determine the location and identity of communicating hosts and could observe the frequency and length of messages being exchanged. This information might be useful in guessing the nature of the communication that was taking place.

Passive attacks are very difficult to detect because they do not involve any alteration of the data. Thus, the **emphasis** in dealing with passive attacks is on prevention rather than detection.

**Active attacks** involve some modification of the data stream or the creation of a false stream and can be subdivided into four categories: replay, **masquerade**, modification of messages, and denial of service.

**Replay** involves the passive capture of a data unit and its subsequent retransmission to produce an unauthorized effect.

A **masquerade** takes place when one entity pretends to be a different entity. A masquerade attack usually include one of the other forms of active attack. For example, authentication sequences can be captured and replayed after a valid authentication sequence has taken place, thus enabling an authorized entity with few privileges to obtain extra privileges by **impersonating** an entity that has those privileges.

**Modification of messages** simply means that some portion of a **legitimate** message is altered, or that messages are delayed or recorded, to produce an unauthorized effect.

The **denial of service** prevents or inhibits the normal use or management of communications facilities. This attack may have a specific target; for example, an entity may **suppress** all messages directed to a particular destination. Another form of service denial is the **disruption** of an entire network, either by disabling the network or by **overloading** it with messages so as to degrade performance.

It is quite difficult to prevent active attacks absolutely, because to do so would require physical protection of all communications facilities and paths at all times. Instead, the goal is to detect them and to recover from any disruption or delays caused by them.

## II. Computer Security Strategy

A comprehensive security strategy involves three aspects:

- **Specification/policy:** What is the security scheme supposed to do?
- **Implementation/mechanisms:** How does it do it?
- **Correctness/assurance:** Does it really work?

### 1. Security Policy

In developing a security policy, a security manager needs to consider the following factors:

- The value of the assets being protected.
- The vulnerabilities of the system
- Potential threats and the likelihood of attacks

Further, the manager must consider the following tradeoffs:

- **Ease of use *versus* security:** Virtually all security measures involve some **penalty** in the area of ease of use. For example, virus-checking software reduces available processing power and introduces the possibility of **system crashes** or malfunctions due to improper interaction between the security software and the operating system.
- **Cost of security versus cost of failure and recovery:** In addition to ease of use and performance costs, there are direct **monetary** costs in implementing and maintaining security measures. All of these costs must be balanced against the cost of security failure and recovery if certain security measures are lacking.

### 2. Security Implementation

Security implementation involves four complementary courses of action:

- **Prevention:** There is a wide range of threats in which prevention is a reasonable goal. For example, if a secure encryption algorithm is used, and if measures are in place to prevent unauthorized access to **encryption keys**, then attacks on confidentiality of the transmitted data will be prevented.
- **Detection:** In a number of cases, absolute protection is not feasible, but it is practical to detect security attacks. For example, there are **intrusion** detection systems designed to detect the presence of unauthorized individuals logged onto a system.
- **Response:** If security mechanisms detect an ongoing attack, the system may be able to respond in such a way as to halt the attack and prevent further damage.
- **Recovery:** An example of recovery is the use of backup systems, so that if data integrity is compromised, a prior, correct copy of the data can be reloaded.

### 3. Assurance and Evaluation

Those who are "consumers" of computer security services and mechanisms desire a belief that the security measures in place work as intended. That is, security consumers want to feel that the security infrastructure of their systems meet security requirements and enforce security policies. These considerations bring us to the concepts of assurance and evaluation.

**Assurance** is the degree of confidence one has that the security measures, both technical and operational, work as intended to protect the system and the information it process. This encompasses both system design and system implementation. Thus, assurance deals with the questions, "Does  the security system meet its requirements?" and "Does the security system implementation meet its specifications?" Node that assurance is expressed as a degree of confidence, not in terms of a formal proof that a design or implementation is correct. With the present **state of the art**, it is very difficult it not impossible to move beyond a degree of confidence to absolute proof.

**Evaluation** is the process of examining a computer product or system with respect to certain criteria. Evaluation involves testing and may also involve formal analytic or mathematical techniques. The central **thrust** of work in this area is the development of evaluation criteria that can be applied to any security system (encompassing security services and mechanisms) and that are broadly supported for making product comparisons.
