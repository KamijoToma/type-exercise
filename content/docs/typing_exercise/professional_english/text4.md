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

**Traffic analysis** is subtler. If we had encryption protection in place, an opponent might still be able to observe the pattern of messages. The opponent could determine the location and identity of communicating hosts and could observe the frequency and

... to be continued ...
