"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

export default function ContactForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("İsim zorunludur"),
    email: Yup.string()
      .email("Geçersiz e-posta")
      .required("E-posta zorunludur"),
    message: Yup.string().required("Mesaj zorunludur"),
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-zinc-900 text-white py-16 px-4"
      id="iletisim"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-red-600 mb-6"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Hemen İletişime Geçin
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-10"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sorularınızı bize gönderin, en kısa sürede sizinle iletişime geçelim.
        </motion.p>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form gönderildi:", values);
            alert("Mesajınız başarıyla gönderildi!");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  İsim
                </label>
                <Field
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  E-posta
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mesaj
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold w-full"
                >
                  Gönder
                </button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.section>
  );
}
